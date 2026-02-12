#!/bin/bash
set -euo pipefail

# Git Repository Diagnostic Script for "realmoffice" Issue
# This script helps identify why a repository/folder is visible locally but not on GitHub

echo "======================================"
echo "Git Repository Diagnostic Tool"
echo "======================================"
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

REPO_NAME="${1:-realmoffice}"

echo -e "${YELLOW}Checking for repository/folder: $REPO_NAME${NC}"
echo ""

# 1. Check current directory
echo "1. Current Working Directory:"
pwd
echo ""

# 2. Check git status
echo "2. Git Status:"
if git rev-parse --git-dir > /dev/null 2>&1; then
    git status
else
    echo "Not in a Git repository (this is OK if checking a standalone repo)"
fi
echo ""

# 3. Check for nested .git directories
echo "3. Checking for nested Git repositories:"
NESTED_REPOS=$(find . -mindepth 2 -name ".git" -type d 2>/dev/null || true)
if [ -z "$NESTED_REPOS" ]; then
    echo -e "${GREEN}✓ No nested repositories found${NC}"
else
    echo -e "${RED}✗ WARNING: Nested Git repositories detected:${NC}"
    echo "$NESTED_REPOS"
    echo -e "${YELLOW}This is likely the cause! Nested repos are not tracked by parent.${NC}"
fi
echo ""

# 4. Check if directory exists
echo "4. Checking if $REPO_NAME exists:"
if [ -d "$REPO_NAME" ]; then
    echo -e "${GREEN}✓ Directory '$REPO_NAME' exists${NC}"
    ls -la "$REPO_NAME" | head -10
    
    # Check if it has .git
    if [ -d "$REPO_NAME/.git" ]; then
        echo -e "${RED}✗ '$REPO_NAME' has its own .git directory (nested repository!)${NC}"
        echo "  This prevents the parent repository from tracking it."
    fi
else
    echo -e "${RED}✗ Directory '$REPO_NAME' not found in current location${NC}"
    echo "  Looking for it elsewhere..."
    FOUND=$(find . -type d -name "$REPO_NAME" 2>/dev/null)
    if [ -n "$FOUND" ]; then
        echo "  Found at: $FOUND"
    fi
fi
echo ""

# 5. Check if tracked by git
echo "5. Checking if $REPO_NAME is tracked by Git:"
if git rev-parse --git-dir > /dev/null 2>&1; then
    TRACKED=$(git ls-files | grep "$REPO_NAME" || true)
    if [ -z "$TRACKED" ]; then
        echo -e "${RED}✗ '$REPO_NAME' is NOT tracked by Git${NC}"
    else
        echo -e "${GREEN}✓ '$REPO_NAME' is tracked:${NC}"
        echo "$TRACKED"
    fi
else
    echo "Not in a Git repository - skipping"
fi
echo ""

# 6. Check .gitignore
echo "6. Checking if $REPO_NAME is in .gitignore:"
if [ -f ".gitignore" ]; then
    IGNORED=$(git check-ignore -v "$REPO_NAME" 2>/dev/null)
    if [ -n "$IGNORED" ]; then
        echo -e "${RED}✗ '$REPO_NAME' is IGNORED by Git:${NC}"
        echo "$IGNORED"
    else
        echo -e "${GREEN}✓ '$REPO_NAME' is not in .gitignore${NC}"
    fi
else
    echo "No .gitignore file found"
fi
echo ""

# 7. Check remote configuration
echo "7. Remote Repository Configuration:"
git remote -v
echo ""

# 8. Check branch information
echo "8. Branch Information:"
git branch -vv
echo ""

# 9. Check unpushed commits
echo "9. Checking for unpushed commits:"
CURRENT_BRANCH=$(git branch --show-current)
if [ -n "$CURRENT_BRANCH" ]; then
    # Check if remote branch exists
    if git rev-parse --verify origin/$CURRENT_BRANCH >/dev/null 2>&1; then
        UNPUSHED=$(git log origin/$CURRENT_BRANCH..$CURRENT_BRANCH --oneline 2>/dev/null || true)
        if [ -n "$UNPUSHED" ]; then
            echo -e "${YELLOW}⚠ You have unpushed commits:${NC}"
            echo "$UNPUSHED"
        else
            echo -e "${GREEN}✓ No unpushed commits${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ Remote branch 'origin/$CURRENT_BRANCH' does not exist${NC}"
        echo "  Your local branch has not been pushed to the remote repository yet."
    fi
else
    echo "Not on any branch"
fi
echo ""

# 10. Summary and recommendations
echo "======================================"
echo "DIAGNOSIS SUMMARY"
echo "======================================"

# Check if the directory exists first
if [ ! -d "$REPO_NAME" ]; then
    echo -e "${YELLOW}ISSUE: Directory not found${NC}"
    echo "The '$REPO_NAME' directory doesn't exist in the current location."
    echo "Please navigate to the correct directory and run this script again."
    echo ""
    echo "For detailed help, see: TROUBLESHOOTING_REALMOFFICE.md"
    exit 0
fi

# Priority 1: Check if it's a standalone repo that was never published
if [ -d "$REPO_NAME/.git" ]; then
    cd "$REPO_NAME"
    HAS_REMOTE=$(git remote -v 2>/dev/null || true)
    cd ..
    
    if [ -z "$HAS_REMOTE" ]; then
        echo -e "${YELLOW}ISSUE IDENTIFIED: Local Repository Never Published to GitHub${NC}"
        echo ""
        echo "The '$REPO_NAME' directory is a Git repository with commits,"
        echo "but it has no remote configured. You simply never published it to GitHub!"
        echo ""
        echo "SOLUTION (3 Simple Steps):"
        echo ""
        echo "1. Create repository on GitHub:"
        echo "   Go to: https://github.com/new"
        echo "   Repository name: $REPO_NAME"
        echo "   ${YELLOW}Do NOT initialize with README${NC} (you already have files)"
        echo ""
        echo "2. Add GitHub as remote:"
        echo "   cd $REPO_NAME"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
        echo ""
        echo "3. Push your commits:"
        echo "   git push -u origin main"
        echo ""
        echo "📖 Detailed guide: PUBLISH_TO_GITHUB.md"
        echo ""
        echo "For detailed help, see: TROUBLESHOOTING_REALMOFFICE.md"
        exit 0
    fi
fi

# Priority 2: Nested repository in parent repo
if [ -d "$REPO_NAME/.git" ]; then
    echo -e "${RED}ISSUE IDENTIFIED: Nested Git Repository${NC}"
    echo ""
    echo "The '$REPO_NAME' directory has its own .git folder, making it a"
    echo "nested Git repository. Git doesn't track nested repositories by default."
    echo ""
    echo "SOLUTIONS:"
    echo "1. Remove nested .git and add to parent repository:"
    echo "   ${YELLOW}⚠ WARNING: This will delete commit history! Backup first:${NC}"
    echo "   cd $REPO_NAME && git log --all --decorate --oneline --graph > ../backup-commits.txt"
    echo "   mv .git ../backup-$REPO_NAME-git  # Backup instead of delete"
    echo "   cd .. && git add $REPO_NAME"
    echo ""
    echo "2. Convert to a Git submodule:"
    echo "   Create '$REPO_NAME' repository on GitHub first, then:"
    echo "   git submodule add https://github.com/USERNAME/$REPO_NAME"
    echo ""
    echo "3. Keep as separate repository:"
    echo "   cd $REPO_NAME"
    echo "   git remote add origin https://github.com/USERNAME/$REPO_NAME.git"
    echo "   git push -u origin main"
elif [ -n "$(git check-ignore -v $REPO_NAME 2>/dev/null)" ]; then
    echo -e "${RED}ISSUE IDENTIFIED: Directory is ignored${NC}"
    echo "The '$REPO_NAME' directory is listed in .gitignore"
    echo ""
    echo "SOLUTION:"
    echo "Remove '$REPO_NAME' from .gitignore, then:"
    echo "git add $REPO_NAME && git commit -m 'Add $REPO_NAME' && git push"
else
    echo -e "${GREEN}No obvious issues detected${NC}"
    echo ""
    echo "If '$REPO_NAME' exists locally but not on GitHub:"
    echo "1. Make sure you've created the repository on GitHub"
    echo "2. Add it as remote: git remote add origin https://github.com/USERNAME/$REPO_NAME.git"
    echo "3. Push your commits: git push -u origin main"
    echo ""
    echo "Or run: git add $REPO_NAME && git commit -m 'Add $REPO_NAME' && git push"
fi

echo ""
echo "For detailed help, see: TROUBLESHOOTING_REALMOFFICE.md"
echo "For publishing guide, see: PUBLISH_TO_GITHUB.md"
