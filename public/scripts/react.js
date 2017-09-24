var React = require('react');

var StarRating = require('react-star-rating');



var FormComponent = React.createClass({

    render: function () {

        return (

            <form target="_self" method="GET">

                <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />

                <button type="submit" className="btn btn-primary">Submit Rating</button>

            </form>

        );

    }

});

React.render(<FormComponent />, document.getElementById('star-rating'));

// handler in react class

handleRatingClick: function (e, data) {

    alert('You left a ' + data.rating + ' star rating for ' + data.caption);

}



<StarRating name="handler" caption="Use onClick Handlers!" totalStars={5} onRatingClick={handleRatingClick} />