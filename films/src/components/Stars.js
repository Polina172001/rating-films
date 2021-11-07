import shortid from 'shortid'
import Star from './Star'

 function Stars({count}) {
    if (count < 1 || count > 5 || isNaN(count)) { 
        return null 
    }

    const stars = Array(count).fill(0)
    return(
        <ul className="card-body-stars u-clearfix">
            {stars.map(() => <Star key={shortid.generate()} />)}
        </ul>
    )
}

Star.defaultProps = {
    count: 0
}

export default Stars