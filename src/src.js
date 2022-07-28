

function generate_HTML(members){

    var html = '';

    members.forEach((member,i) => {

        const props = [];

        for(let prop in member){
            props.push(prop);
        }

        const unique = Object.values(member)[3]

        const card_html = `
            <div class="col-4">
                <div class="card">
                    <div class="card-header">
                        <h5>${member.name}</h5>
                        <h5>${member.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <div class="container" style="padding:5%">
                            <div class="row row-cols-1">
                                <div class="col border" style="padding: 2%;">${props[1]}: ${member.id}</div>
                                <div class="col border" style="padding: 2%;">${props[2]}: ${member.email}</div>
                                <div class="col border" style="padding: 2%;">${props[3]}: ${unique}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       `
        html = html.concat(card_html);
    })
    var final_html = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Practice</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
            <link rel="stylesheet" href="css/practice.css">
        </head>
        
        <body >
        
            <header>
                <h1>My Team</h1>
            </header>
        
            <div class="container storage">
                <div class="row g-3" id="employee_cards">
                    ${html}
                </div>
            </div>
        
        
        
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <script src="../index.js"></script>
        </body>
        </html>`

    return final_html;
}

module.exports = generate_HTML
