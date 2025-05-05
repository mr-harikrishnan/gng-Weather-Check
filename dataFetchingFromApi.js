
async function getAllCountries() {
    return fetch("https://restcountries.com/v3.1/all", {
        method: "GET"
    })
}

async function app() {
    try {
        var country = await getAllCountries()
        var countryList = await country.json()

        document.body.style.display = "flex"
        document.body.style.flexWrap = "wrap"
        for (let i of countryList) {
            var countrtyDiv = document.createElement("div")
            countrtyDiv.style.width = "170px"
            countrtyDiv.style.height = "220px"
            countrtyDiv.style.border = "2px solid black"
            countrtyDiv.style.margin = "20px"
            countrtyDiv.style.display = "flex"
            countrtyDiv.style.flexDirection = "column"
            countrtyDiv.style.justifyContent = "center"
            countrtyDiv.style.alignItems = "center"
            document.body.appendChild(countrtyDiv)

            var flagimage = document.createElement("img")
            flagimage.src = `${i.flags.png}`
            flagimage.style.height = "160px"
            flagimage.style.width = "150px"
            flagimage.style.border = "1px solid black"
            flagimage.onclick = function () {

                async function findTemp(apiKey, city) {
                    try {
                        var result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
                        var data = await result.json()
                        console.log(data.location.name)
                        console.log(data.current.temp_c)
                        console.log(data.current.temp_f)
                        alert(`LOCATION : ${data.location.name}
                               URRENT TEMP IN C : ${data.current.temp_c}
                               CURRENT TEMP IN F : ${data.current.temp_f}`

                        )
                    } catch (error) {
                        console.log(error)
                    }

                }
                findTemp("9ba6bc78bce046bd97962316250505", `${i.name.common}`)
            }

            countrtyDiv.appendChild(flagimage)

            var nameDiv = document.createElement("div")
            nameDiv.style.width = "150px"
            nameDiv.style.height = "30px"
            nameDiv.style.border = "1px solid black"
            nameDiv.style.marginTop = "5px"
            nameDiv.style.paddingTop = "5px"
            nameDiv.style.paddingBottom = "7px"
            nameDiv.style.textAlign = "center"
            nameDiv.textContent = `${i.name.common}`
            countrtyDiv.appendChild(nameDiv)

        }








    } catch (error) {
        console.log(error)
    }
}
app()




