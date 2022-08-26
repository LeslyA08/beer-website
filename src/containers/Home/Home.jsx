import ExploreBeers from "../../containers/ExploreBeers/ExploreBeers"


const Home = (props) => {
    
    return (
        <>
        <ExploreBeers beers={props.beers}/>
        </>
        )
}

export default Home;