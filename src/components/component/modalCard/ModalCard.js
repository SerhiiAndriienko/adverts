import { Modal, ModalBackdrop } from './ModalCard.styled';
import {
  CardImg,
  Card,
  CloseBtn,
  BlueColor,
  // Descriptions,
  DescriptionPart,
  Decoration,
  CarModel,
  LearnMoreBtn,
} from './ModalCard.styled';

import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import Description from '../description/Description';

export function ModalCard({ selectedCar, setIsModalOpen }) {
  const addressArray = selectedCar.address.split(', ');
  const conditionsArray = selectedCar.rentalConditions.split('\n');
  return ReactDOM.createPortal(
    <>
      <ModalBackdrop
        onClick={() => {
          setIsModalOpen();
        }}
      ></ModalBackdrop>
      <Modal>
        <>
          <Card key={selectedCar.id}>
            <div>
              <div style={{ display: 'block' }}>
                <CardImg src={selectedCar.img}></CardImg>
                <Decoration>
                  <p>
                    {selectedCar.make} <CarModel>{selectedCar.model}</CarModel>,{' '}
                    {selectedCar.year}
                  </p>
                </Decoration>
                <DescriptionPart>
                  {addressArray[1]} | {addressArray[2]} | Id: {selectedCar.id} |{' '}
                  Year: {selectedCar.year} | Type: {selectedCar.type} | Fuel
                  Consumption {selectedCar.fuelConsumption} | Engine Size:{' '}
                  {selectedCar.engineSize}
                </DescriptionPart>
                <p>{selectedCar.description}</p>
                <p>Accessories and functionalities:</p>
                <DescriptionPart>
                  |{' '}
                  {selectedCar.accessories.map(accessor => (
                    <span>{accessor} | </span>
                  ))}
                  <br></br>|{' '}
                  {selectedCar.functionalities.map(accessor => (
                    <span>{accessor} | </span>
                  ))}
                </DescriptionPart>
                <p>Rental Conditions</p>
                <ul>
                  <li>
                    {conditionsArray[0].slice(0, conditionsArray[0].length - 2)}
                    <BlueColor>
                      {' '}
                      {conditionsArray[0].slice(
                        conditionsArray[0].length - 2,
                        conditionsArray[0].length
                      )}
                    </BlueColor>
                  </li>
                  {conditionsArray.slice(1).map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}

                  <li>
                    Mileage:
                    <BlueColor>{selectedCar.mileage}</BlueColor>
                  </li>
                  <li>
                    <BlueColor>{selectedCar.rentalPrice}</BlueColor>
                  </li>
                </ul>

                <LearnMoreBtn>Reantal car</LearnMoreBtn>
              </div>
            </div>
          </Card>
        </>
        <CloseBtn>close</CloseBtn>
      </Modal>
    </>,
    document.querySelector('#modal-card')
  );
}

// ModalCard.propTypes = {
//   price: PropTypes.number,
//   oneProduct: PropTypes.array,
//   changePrice: PropTypes.func.isRequired,
//   amount: PropTypes.number,
//   changeAmount: PropTypes.func.isRequired,
//   cartList: PropTypes.array,
//   addProductToCart: PropTypes.func.isRequired,
//   closeModal: PropTypes.func.isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };
