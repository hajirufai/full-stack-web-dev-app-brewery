/**
 * How to initialize node package manager (npm)
 * npm init -y
 * 
 * if you already have a package.json , how to install package dependenacies automatically
 * npm install  # npm i
 * 
 * How to install a package
 * npm install <package>  // npm i <package>
 * 
 * How to install a package globally
 * npm install -g <package>
 * 
 * How to check which ports in your computer that are actively listening to incoming requests:
 * sudo lsof -i -P -n | grep LISTEN
 * 
 * How to run express/node application in nodemon
 * nodemon index.js  # npm run dev
 * 
 * app.use(express.static("public"))
 * How to make your EJS use the static files by default located in '/public/'
 * app.use(express.static("public"))  // for css and images # make the styling show up
 * 
 * Therefore to refer to eg css files:
 * <link rel="stylesheet" src="styles/main.css">  // === src='{project}/public/styles/main.css'
 * 
 * partials are repeated HTML codes which are often reused in ejs eg header and footer
 * 
 * In js-EJS code, by default you render at "{project}/views/"
 * therefore you just write eg res.render('index.ejs');  // === res.render('{project}/views/index.ejs')
 */