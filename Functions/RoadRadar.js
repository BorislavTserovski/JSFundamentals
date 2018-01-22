function roadRadar([speed, area]) {
    let limit = getLimit(area)
    let infraction = getInfraction(speed, limit)
    if(infraction){
        console.log(infraction)
    }

   function getInfraction(speed, limit) {
       let overSpeed = speed - limit
       if(overSpeed <= 0){
           return false
       }
       else{
           if( speed - limit >= 1 && speed - limit <= 20){
               return 'speeding'
           }else if(speed - limit > 20 && speed - limit <= 40){
               return 'excessive speeding'
           }else {
               return 'reckless driving'
           }


       }
       
   }

    function getLimit(area) {
        switch (area.toLowerCase()) {
            case 'motorway':
                return 130
                break
            case 'interstate':
                return 90
                break
            case 'city':
                return 50
                break
            case 'residential' :
                return 20
                break
        }

    }
}

roadRadar([40, 'city'])