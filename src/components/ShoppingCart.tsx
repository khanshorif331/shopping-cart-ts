import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

type ShoppingCartProps = {
	isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
	const { closeCart } = useShoppingCart()
	return (
		<Offcanvas placement="end" show={isOpen} onHide={closeCart}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Cart</Offcanvas.Title>
			</Offcanvas.Header>
		</Offcanvas>
	)
}
