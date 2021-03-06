import React from 'react';
import ReactDom from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Unit from './Unit.js'

describe('Unit', () => {
    it('should clear smoke test for Unit rendering', () => {
        const div = document.createElement('div');
        const dummyFunc = (something) => {
            return () => {
                this.setState((prevState, props) => {
                    const purchasedUnit = something;
                    const newPurchasedUnits = prevState.purchasedUnits;
                    newPurchasedUnits.push(purchasedUnit);
                    return {
                        purchasedUnits: newPurchasedUnits
                    };
                });
            }
        };
        const dummyProp = {
            "title": "Cardboard Box",
            "houseType": "Apartment",
            "image": "./itsABox.jpg",
            "location": {
                "city": "Seattle",
                "country": "USA"
            },
            "payment": {
                "cost": 1,
                "description": "Free cancellation"
            },
            "host": {
                "name": "I5 underpass",
                "isSuperhost": false
            },
            "rating": {
                "stars": 1,
                "reviews": 6876
            }
        };
            
        ReactDom.render(<Unit unit={dummyProp} onAddToCart={dummyFunc}/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('should render a minimal Unit section of Catalogue', () => {
        const dummyFunc = (index) => {
            return () => {
                this.setState((prevState, props) => {
                  const newPurchasedUnits = prevState.purchasedUnits;
                  newPurchasedUnits.splice(index, 1)
                  return {
                      purchasedUnits: newPurchasedUnits
                  }
                });
            }
        };
        const dummyProp = {
            "title": "Cardboard Box",
            "houseType": "Apartment",
            "image": "./itsABox.jpg",
            "location": {
                "city": "Seattle",
                "country": "USA"
            },
            "payment": {
                "cost": 1,
                "description": "Free cancellation"
            },
            "host": {
                "name": "I5 underpass",
                "isSuperhost": false
            },
            "rating": {
                "stars": 1,
                "reviews": 6876
            }
        };
            
        const component = TestRenderer.create(<Unit unit={dummyProp} onAddToCart={dummyFunc}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
})