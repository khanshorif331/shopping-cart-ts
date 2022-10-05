import { Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgurl: string
}

export const StoreItem = ({ id, name, price, imgurl }: StoreItemProps) => {
	return (
		<Card>
			<Card.Img
				variant="top"
				src={imgurl}
				height="200px"
				style={{ objectFit: 'contain' }}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
			</Card.Body>
		</Card>
	)
}
