const Paging = {
  initialValue() {
    return {
      total: 0,
      current: 0,
      atEnd: true,
    };
  },
  next(previousPaging, limit = 10) {
    const { current = 0 } = previousPaging || {};
    return { pn: current + 1, limit };
  },
};

export default Paging;
