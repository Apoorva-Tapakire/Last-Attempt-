﻿using BalLibrary;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DalLibrary
{
    public class PaymentDAL
    {
        public void PaymentMethod(PaymentBAL bal)
        {
            SqlConnection cn = new SqlConnection("Data Source=LAPTOP-6C58L34N\\SQLEXPRESS;Integrated Security=true;Initial Catalog=OnlineShopping");
            string s = "[dbo].[Payment_insert]";
            SqlCommand cmd = new SqlCommand(s, cn);
            cmd.Parameters.AddWithValue("@p_BankName", bal.BankName);
            cmd.Parameters.AddWithValue("@p_ISFCCode", bal.IFSCCode);
            cmd.Parameters.AddWithValue("@p_CardNo", bal.CardNo);
            cmd.Parameters.AddWithValue("@p_CVVNo", bal.CVVNo);
            cmd.Parameters.AddWithValue("@p_UPi", bal.UPINo);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cn.Open();
            cmd.ExecuteNonQuery();

            cn.Close();
            cn.Dispose();
        }
    }
}
