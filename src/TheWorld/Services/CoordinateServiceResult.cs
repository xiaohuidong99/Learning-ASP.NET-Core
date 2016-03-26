﻿namespace TheWorld.Services
{
    public class CoordinateServiceResult
    {
        public bool Success { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Message { get; set; }
    }
}