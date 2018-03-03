package net.microservice.cloud.dashboard.repository;

import net.microservice.cloud.dashboard.model.InstanceHistory;
import java.util.List;

/**
 * Application repository interface
 * @author Julien Roy
 */
public interface RegistryRepository {

    /**
     * Return list of last registered instance in registry
     * @return List of 1000 last instance registered
     */
    List<InstanceHistory> getRegisteredInstanceHistory();

    /**
     * Return list of last canceled instance in registry
     * @return List of 1000 last instance cancelled
     */
    List<InstanceHistory> getCanceledInstanceHistory();
}
