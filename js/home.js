let toggleNavStatus = false;

let toggleNav = function(){

    let getSideBar = document.querySelector('.nav-sidebar')
    let getSideBarUI = document.querySelector('.nav-sidebar');
    let getSideBarTitle = document.querySelector('.nav-sidebar ul');
    let getSideBarLinks = document.querySelectorAll('.nav-sidebar ul a');

    if (toggleNavStatus === false){

        getSideBarUI.style.visibility = 'visible';
        getSideBar.style.width = '272px';
        getSideBarTitle.style.opacity = '0.5';

        let arrayLength = getSideBarLinks.length;

        for(var i = 0; i < arrayLength; i++){

            getSideBarLinks[i].style.opacity = '1';
        }

        toggleNavStatus = true;
    }

    else if(toggleNavStatus === true){

        
        getSideBar.style.width = '50px';
        getSideBarTitle.style.opacity = '0';
        
        
        let arrayLength = getSideBarLinks.length;

        for(var i = 0; i < arrayLength; i++){

            getSideBarLinks[i].style.opacity = '0';
        }

        getSideBarUI.style.visibility = 'hidden';

        toggleNavStatus = false;
    }
}
