


export class Gift {
    constructor(data) {
        this.id = data.id
        this.url = data.url
        this.images = data.data.images
    }



    get template() {
        return `
    <div>
                  <h1>GIFTED</h1>
                  <form action="/">
                    <hr>
                    <label id="tag" for="tag"><i>TAG</i></label>
                    <input type="text" name="tag" id="tag"
                      required/>
                    <hr>
                    <label id="Url" for="Url"><i>URL</i></label>
                    <input type="text" name="Url" id="Url"
                      required/>
                    <hr>
                    <button type="submit" href="/">Submit</button>

                  </form>
                </div>
                <div class="row">
                  <div class="col-4">
                    <label id="icon" for="search"><i></i> </label>
                    <input type="search" name="search" id="search"
                      required/>
                    <button type="submit" href="/">search</button>

                  </div>
                </div>









              </div>
    
    
    
    
    `
    }






}