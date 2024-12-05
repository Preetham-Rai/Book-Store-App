import Order from "./order.model.js";

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.error("Error Creating Order", error);
    res.status(500).json({ message: "Failed to create Order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).send(orders);
  } catch (error) {
    console.error("Error While Fetching", error);
    res.status(500).json({ message: "Failed to Get Your Orders" });
  }
};

export { createOrder, getOrderByEmail };
