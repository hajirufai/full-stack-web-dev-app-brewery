# create a new project
dfx new <project-name> && cd <project-name>
# start the project
dfx start
# Edit your project, open another shell session and deploy the project to update the changes
dfx deploy
 
 
# Motoko function and the candid User Interface (UI)
# Calling a function in terminal without the candid UI, the function must first be public
dfx canister call <project-name> <function-name> <argument-if-there>

# Using candid UI
# First get the canister ID of the Candid UI
dfx canister id __Candid_UI
# use the output, say <CANDID_UI_CANISTER_IDENTIFIER> to access the Candid UI, in the following url:
# http://127.0.0.1:8000/?canisterId=<CANDID_UI_CANISTER_IDENTIFIER> 

# Getting a canister id of a project
# dfx canister id <project-name>
dfx canister id dbank


# OR simply use the "url" in:
# Candid: 
#     dbank: url


# orthogonal persistence
# stable var currentValue: Float = 10.0;  // Make it orthogonal persistence


# npm
npm update 
npm install --save-dev webpack@latest webpack-cli@latest
npm run build
npm start


