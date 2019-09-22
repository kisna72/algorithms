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
const Molds = [{id:1,name:"32 Cavity Mold 1",qualifiedMachines:[1,2,3]},{id:2,name:"Mold 2",qualifiedMachines:[1,2,3]},{id:3,name:"Mold 3",qualifiedMachines:[1,2,3]}]
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

// Fundamentally we are choosing combo of IMM Machine, Mold, Cavity, SKU, and time. 
// For time, one of the option is to run each job linearly in 1 IMM, so we will choose total time of all SKU's combined. 
const max_total_time_allowed = SKUs.reduce((accumulator, cur)=> {
    const currentTime = cur.perPartTime * cur.partsRequired
    return accumulator + currentTime
} , 0)

console.log(max_total_time_allowed) //  In seconds. 

/**
 * Naive solution: Run through all combos. Check for constraints
 */
for(let i=0; i< SKUs.length; i++){
    // Check constraint on SKUs here... should be none for the time being. 
    const sku = SKUs[i]
    for(let j = 0; j< cavities.length; j++){
        // check if cavity can run the SKU. continue if not. 
        const cavity = cavities[j]
        if(!cavity.sku.includes(sku.id)){
            console.log("cannot run this SKU so moving on")
            continue 
        }
        for(let k = 0; k< Molds.length; k++){
            // Check if we have the correct number of cavity.
            // Also this is where the energy concerns will come into play. Running 32 cavity is cheaper than running 4 cavity mold.
            // COnstraint check: Can this mold run the cavity? - Need to be defined.. Has it been qualified?
            const mold = Molds[k];

            for(let l = 0; l < IMMs.length; l++){
                const imm = IMMs[l];
                // Constraint - can this IMM even run that mold ? Some IMMS can't run larger molds. 
                if (!mold.qualifiedMachines.includes(imm.id)){
                    //console.log("The IMM is not qualified for this mold. ", imm,  )
                    //console.log("Mold ", mold )
                    continue;
                }

                const job_configuration = {
                    sku,
                    cavity,
                    mold,
                    imm
                }
                console.log("Job Config", job_configuration);

                // By this point, we know how to run the IMM. Next up, we need to figure out time.
                for(let m = 0; m < max_total_time_allowed; m++){
                    // Interesting .... 
                    // COnstraints:
                    // - Cannot run two things on the same machine at the same time. so we need that info to run constraints here. But we can run another job
                    // - Cannot run a job while the same job is running on another machine. 
                    //console.log("time")
                }

            }
        }

    }
}