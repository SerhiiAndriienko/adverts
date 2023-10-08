import {
  CardImg,
  Card,
  CloseBtn,
  BlueColor,
  Modal,
  ModalBackdrop,
  ConditionsList,
  DescriptionPart,
  Decoration,
  Condition,
  CarModel,
  RentalCarBtn,
} from './ModalCard.styled';
import closeBtn from '../../public/x.svg';
import ReactDOM from 'react-dom';

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
                <p
                  style={{
                    paddingTop: '14px',
                  }}
                >
                  {selectedCar.description}
                </p>
                <p
                  style={{
                    paddingTop: '24px',
                  }}
                >
                  Accessories and functionalities:
                </p>
                <DescriptionPart>
                  |{' '}
                  {selectedCar.accessories.map(accessor => (
                    <span key={accessor}>{accessor} | </span>
                  ))}
                  <br></br>|{' '}
                  {selectedCar.functionalities.map(accessor => (
                    <span key={accessor}>{accessor} | </span>
                  ))}
                </DescriptionPart>
                <p
                  style={{
                    paddingTop: '24px',
                  }}
                >
                  Rental Conditions:
                </p>
                <ConditionsList>
                  <Condition>
                    {conditionsArray[0].slice(0, conditionsArray[0].length - 2)}
                    <BlueColor>
                      {' '}
                      {conditionsArray[0].slice(
                        conditionsArray[0].length - 2,
                        conditionsArray[0].length
                      )}
                    </BlueColor>
                  </Condition>
                  {conditionsArray.slice(1).map(condition => (
                    <Condition key={condition}>{condition}</Condition>
                  ))}

                  <Condition>
                    Mileage:
                    <BlueColor>
                      {' '}
                      {selectedCar.mileage.toLocaleString('en-US')}
                    </BlueColor>
                  </Condition>
                  <Condition>
                    <BlueColor>{selectedCar.rentalPrice}</BlueColor>
                  </Condition>
                </ConditionsList>

                <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
              </div>
            </div>
          </Card>
        </>
        <CloseBtn
          onClick={() => {
            setIsModalOpen();
          }}
          width="18"
          height="18"
          src={closeBtn}
          alt="filled favourite icons"
        />
      </Modal>
    </>,
    document.querySelector('#modal-card')
  );
}
