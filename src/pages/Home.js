import axios from "axios";

const Home = function(){
    const fetch = function(){
        axios.get("http://localhost:8000/get_all_employees")
                .then((Response) => {
                    console.log(Response);
                })
                .catch((Error) => {
                    if(Error.response.status == 400){
                        alert(Error.response.data.detail);
                    }
        });
    }
    fetch();
    return (
        <div>
            Hello World!
        </div>
    )
}
export default Home;