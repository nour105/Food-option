
import CountUp from "react-countup";
function Counter() {
 
    return(
        < div className='style-Counter'>
            <div className="style-conterX">
            
            <h1>
                <CountUp start={0} end={15867} duration={1} delay={0} />
                +
            </h1>
            <h2>customers</h2>
            </div>
            <div className="style-conterX">
            <h1>
                <CountUp start={0} end={100} duration={1} delay={0} />
                +
            </h1>
            <h2>partners</h2>
            </div>
            <div className="style-conterX">
            <h1>
                <CountUp start={0} end={150} duration={1} delay={0} />
                +
            </h1>
            <h2>restaurants</h2>
            </div>
            <div className="style-conterX">
            <h1>
                <CountUp start={0} end={19399} duration={1} delay={0} />
                +
            </h1>
            <h2>reviews</h2>
            </div>
            </div>
       
    )
}
export default Counter