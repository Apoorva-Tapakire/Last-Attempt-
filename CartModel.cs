using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectWebApplication.Models
{
    public class CartModel
    {
        public int OrderId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public decimal DiscountPrice { get; set; }

        public decimal FinalPrice { get; set; }
    }
}