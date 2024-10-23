import React from "react";
import ReactDOM from "react-dom/client";


// 1st argument takes name of the tag  which we want to create 2 is to specify attributes such as  classname,id,events such as onclick etc , 3 is to display on screen
const h1tag=React.createElement('h1',{id:'heading',onClick:()=>{alert('heyy every onr')}}, "hello boii") //creates element 

const root=ReactDOM.createRoot(document.getElementById('root')) // helps to append element create in a dom 

// for Nested Structre we use array 
const parent =
React.createElement("div",{id:"parent"},
       
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{id:"headers"},"Hey I am in child 1 h1 tag"),
    React.createElement("h3",{id:"headers3"},"Hey I am in child 1 h3 tag")] ),

    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"headers2"},"Hey I am in child 2 h1 tag"),
    React.createElement("h3",{id:"headers23"},"Hey I am in child 2 h3 tag")]
                
));


console.log(parent);





//NPM package manager it is also know as dependencies
//package.json is configuration for npm it keeps track of version which are installed in it 
//App cana i have 2 type of packages dev dependency other is normal dependency 
//^ is know as carat it help us to automatically minor upgrade to latest version & ~ install major upgrade
// package-lock.json keeps  tracks of exact version of all the package 
// every dependencies has it own package.json and other dependency
//node modules are collection of dependencies we dont npde_modules on git because we can re genrate through npm i 
//npx means executing the package 
//Parcel  -Dev Build,Local Server , Hot module replacement , File watching algorithm , caching for faster builds , Image optimization , minification , bundling , compressing , differential bundling - support older browser , error handling , remove unused code , https