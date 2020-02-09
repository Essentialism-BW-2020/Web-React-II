import React, { Component } from 'react';
import { connect } from 'react-redux';
import userReducer  from '../reducers/userReducer';

// import projects & values

 class AccountDashboard extends Component {
    componentWillUpdate() {
        this.props.userReducer();
    }    

    render() {
                    //.map
               const dashItems = this.props.info.map(function(item, idx) {
                        return ([                  
                            <p key={idx}>{item.id}</p>,                     
                            <h3 key={idx}>{item.user}</h3>,                     
                            <p key={idx}>{item.values}</p>,                     
                            <p key={idx}>{item.projects}</p>,
                     
                        ]);
                     
                     });
        
        

            // const dashItems = this.props.info.map((item) => (
            //     <div key={item.id}>
            //         <h3>{item.user}</h3>
            //         <p>{item.values}</p>
            //         <p>{item.projects}</p>
            //     </div>
            // ));
         return ( 
             <div>
                <h1>Dashboard</h1> 
                  {dashItems}
             </div>
        );
    }
}

const mapStateToProps = state => ({
    info: state.user //state var here
});

export default connect(mapStateToProps, { userReducer })(AccountDashboard);