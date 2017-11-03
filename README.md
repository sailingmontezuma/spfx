
npm install -g @microsoft/generator-sharepoint
npm install -g @microsoft/generator-sharepoint@1.0.2
npm install -g source-map-explorer newman
npm install newman --global;
npm i react
npm install @types/jquery@2.048 @types/angular@1.6.14 --save-dev
 

npm list -g --depth 0
npm list -g --depth=0
npm ls -g --depth=0

npm view @microsoft/generator-sharepoint
npm outdated -g
npm update -g
npm update -g jshint
npm run test
npm run clean
npm prune
npm link gulp



gulp build
>>output goes to /lib folder
gulp trust-dev-cert
gulp serve
gulp serve --nobrowser
gulp clean
gulp bundle
gulp bundle --ship
>>output goes to /dist folder
>>creates manifest json file
>>creates /temp/deploy folder
>>multiple bundles can be created from the same sharepoint projects
gulp --tasks
gulp -T
gulp package-solution --ship
gulp deploy-azure-storage
>>run config based on content of write-manifest.json file
1. build 2. bundle

nvm ls available

git clean -f -d
git fetch && git checkout dev

/_layouts/15/workbench.aspx


web site feature to activate:
Site Pages
Allows users to add new site pages to a site

yo @microsoft/sharepoint
yo @microsoft/sharepoint --skip-install


dist folder execution context:
source-map-explorer hello-world.bundle.js hello-world.bundle.js.map


code .
explorer .


C:\apps\nuget.exe restore "C:\bb\RB.GLDS.DocConverter.Api.sln"
Update-Package -Id <package_name> –reinstall 
msbuild RB.GLDS.DocConverter.Api.sln

Install-Package Autofac.WebApi2 -Version 4.1.0 

newman run collections\TestCollection1.postman_collectionAzure.json -n 18

SharePoint Online Management Tool -  Powershell commands

write-manifest.json
