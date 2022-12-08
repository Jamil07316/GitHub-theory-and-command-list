/*

Version(Software Development Project) Control System -VCS
=======================================================================
    Adding Feature and save a version
        -Adding new feature
        -Modify existing feature


Software Development workflow
===========================================================
Feature - (branch)
Sub-feature - (version)

Facebook (Demo)

    status management (branch)
        -   image upload    (version)
        -   link management (version)
        -   React System    (version)
        -   comment management  (version)
        -   notification management (version)

    personal profile management (branch)

    group management (branch)

    page management (branch)



===============================================================
---------------------Git Start here ------------------------
===============================================================

Working with GIT (Local version management)

    - install git
        - link (https://git-scm.com/)
        - command (git --version) after installing for checking

    - configure git
        - git config --global user.name 'jamil'
        - git config --global user.email 'jamil07316@gmail.com'

        - command (git config --list) after configuring git for checking
        - press (wq key) for closing end (used to solve end problem)



Version Control System (there are three step of Version Control System)

Working Dir             staging area                        commit (saved a version)
==============        ===================                =================================
index.html              git add fileName                   git commit -m  'Message'
main.js                 git add .  (all file will add)     git commit -am 'Message' (all modified files will commit in single command)


** Github is remote version of local Git feature management


* Some Important git command
    - git init                      (used to initialize empty Git repository of project)-   it is first step
    - git status                    (used to see files in staging area)
    - git rm --cached               (used to remove file from staging area)
    - git log                       (used to show committed id and details)
    - git log --oneline             (used to show committed id with committed message)
    - git restore modifiedFileName  (used to discard changes in working directory)
    - git show                      (used to see code of all committed or modified file)
    - git show commitId             (used to see code of specific committed or modified file)

    - git checkout version          video - 47min
    - git switch -                  video - 47min

    - git reset                     (used to remove files from staging area)
    - git reset --hard              (used to remove files from staging area and remove modified code in working directory)


 */

//
//
//

/*

===============================================================
---------------------GitHub Start here ------------------------
===============================================================
video- 57min.

    step of github
    ================
    1. at first, create a github account. Then have to log in this account.
    2. have to create a new repository
        i.    Repository name
        ii.   Description (optional)
        iii.  Public
        iv.   click- Create repository button

    3. or push an existing repository from the command line
        command-1:  git remote add origin https:
        command-2:  git branch -M main
        command-3:  git push -u origin main

    4. if any file is committed after push an existing repository
            command-1:  git push -u origin main



    * using github pages


        step of using github pages
        ================================
        1. have to go repository
            (which repository code will want to run as page, this is repository)
        2. have to click settings
        3. then have to click pages menu
        4. select main branch
        5. have to click to save button of branch
        6. at last, have to reload for getting page link





 */
