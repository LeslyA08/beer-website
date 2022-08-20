import ExploreBeers from "../../containers/ExploreBeers/ExploreBeers"
import Nav from "../../components/Nav/Nav"


const Home = (props) => {
    return (
        <>
        <ExploreBeers beers={props.beers}/>
        </>
        )
}



export default Home;