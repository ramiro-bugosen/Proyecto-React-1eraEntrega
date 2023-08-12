import { Button, Modal, Typography } from "@mui/material";
import ProductDetail from "./ProductDetail";
const ProductInfo = ({ open, setOpen, children }) => {

    const handleClose = () => {
        setOpen(prev => !prev)
    }


    return (<>
        <Modal open={open} onClose={handleClose}>
            <div>
                <Typography>Modal</Typography>
                
            </div>
        </Modal>
    </>);
}

export default ProductInfo;