function attachEventsListeners() {
    let button = document.getElementById('convert')
    button.addEventListener('click',()=>{
        let inputValue = document.getElementById('inputDistance').value
        let from = document.getElementById('inputUnits')
        let to = document.getElementById('outputUnits')

        switch(from.value){
            case 'km':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue * 1000
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue * 1000 * 100
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue * 1000 * 100 * 10
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.62137
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 1093.6
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 3280.8
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 39370
                        break;
                }
                break;
            case 'm':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 1000
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue * 100
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue * 100 * 10
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.00062137
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 1.0936
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 3.2808
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 39.370
                        break;
                }
                break;
            case 'cm':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 100000
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 100
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue * 10
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.0000062137
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 0.010936
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 0.032808
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 0.39370
                        break;
                }
                break;
            case 'mm':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 1000000
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 1000
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue / 10
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.00000062137
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 0.0010936
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 0.0032808
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 0.039370
                        break;
                }
                break;
            case 'mi':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 0.62137
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 0.00062137
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue / 0.0000062137
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue / 0.00000062137
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 1760.0
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 5280.0
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 63360
                        break;
                }
                break;
            case'yrd':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 1093.6
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 1.0936
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue / 0.010936
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue / 0.0010936
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.00056818
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 3.0000
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 36.000
                        break;
                }
                break;
            case 'ft':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 3280.8
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 3.2808
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue / 0.032808
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue / 0.0032808
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.00018939
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 0.33333
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue * 12.000
                        break;
                }
                break;
            case 'in':
                switch(to.value){
                    case 'km':
                        document.getElementById('outputDistance').value = inputValue / 39370
                        break;
                    case 'm':
                        document.getElementById('outputDistance').value = inputValue / 39.370
                        break;
                    case 'cm':
                        document.getElementById('outputDistance').value = inputValue / 0.39370
                        break;
                    case 'mm':
                        document.getElementById('outputDistance').value = inputValue / 0.039370
                        break;
                    case 'mi':
                        document.getElementById('outputDistance').value = inputValue * 0.000015783
                        break;
                    case 'yrd':
                        document.getElementById('outputDistance').value = inputValue * 0.027778
                        break;
                    case 'ft':
                        document.getElementById('outputDistance').value = inputValue * 0.083333
                        break;
                    case 'in':
                        document.getElementById('outputDistance').value = inputValue
                        break;
                }
                break;
        }


    })
}
