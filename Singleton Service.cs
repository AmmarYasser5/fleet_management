public sealed class FleetManager
{
    // Static instance created at type initialization
    private static readonly FleetManager _instance = new FleetManager();
    private readonly List<string> _vehicles;

    // Private constructor to prevent instantiation
    private FleetManager()
    {
        _vehicles = new List<string>();
    }

    // Static property to access the Singleton instance
    public static FleetManager Instance
    {
        get
        {
            return _instance;
        }
    }

    // Example methods to manage fleet data
    public void AddVehicle(string vehicle)
    {
        _vehicles.Add(vehicle);
    }

    public IEnumerable<string> GetAllVehicles()
    {
        return _vehicles;
    }
}
