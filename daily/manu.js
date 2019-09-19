const problem = `
Factory has N  IMM machines. 
has M Molds.
has O cavities and each of them works with certain mold (factor of series and materials)
has P SKUs - each has a specific number of parts required. However SKUs can be broken up.
Breaking up SKUs will take 30 mins.

Find the most efficient way to run these machines
`
const SKUs =[
    {id:1,name:"s800",partsRequired:5000,perPartTime:.1,jobChangeTime:30*60},
    {id:2,name:"s900",partsRequired:5000,perPartTime:.1,jobChangeTime:30*60}
]
const IMMs = [{id:1,name:"Husky 1"},
    {id:2,name:"Husky 2"},{id:3,name:"Husky 3"},{id:4,name:"Husky 4"}
]
const Molds = [{id:1,name:"32 Cavity Mold 1",qualifiedMachines:[1,2,3]},{id:2,name:"Mold 2",qualifiedMolds:[1,2,3]},{id:3,name:"Mold 3",qualifiedMolds:[1,2,3]}]
const cavities = [{
        id:1,
        name:"series 800",
        sku:[1]},
    {
        id:2,
        name:"Series 900",
        sku:[2]}]



/**
 * Create a tree of all the possible ways of running the job. 
 * Apply constraints for each one...
 */
const jobConfigurations = [
    {
        sku:1,
        imm:1,
        mold:1,
        cavity:1,
    },
    {
        sku:1,
        imm:2,
        mold:1,
        cavity:1,
    },
]