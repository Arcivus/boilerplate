### Requires globally installed hygen library
`
npm i -g hygen
`

## Generate module
From this directory run

`
hygen module new MODULE_NAME --component COMPONENT_NAME
`

For example:

`
hygen module new dashboard --component Dashboard
`

will generate inside frontend/js/app new module with name "dashboard", all necessary boilerplate and in it's root files 
DashboardComponent.tsx and DashboardContainer.tsx

## Generate Component + Container pair
From this directory run 

`
hygen container new CONTAINER_NAME
`

For example: 

`
hygen container new StatsBlock
`

You will be prompted to enter path from frontend/js/app folder to generate container folder in.

For example: 

`
dashboard/components/
`

will generate folder StatsBlock and boilerplate files StatsBlockComponent.tsx and StatsBlockContainer.tsx in directory
frontend/js/app/dashboard/components/


## Create new generator
Described here https://github.com/ronp001/hygen-create
