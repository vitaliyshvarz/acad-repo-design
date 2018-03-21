package com.acad.controller;

import com.acad.entities.Box;
import com.acad.entities.BuildingArea;
import com.acad.entities.ConnectedLine;
import com.acad.entities.InsideBox;
import com.acad.entities.Network;
import com.acad.entities.Schema;
import com.acad.entities.StepPoint;
import com.acad.entities.Walker;
import com.acad.test.DBSimulator;
import com.acad.test.SchemaObjectDB;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@Slf4j
public class MainCadController {

    private SchemaObjectDB<Box> boxesDB = DBSimulator.getBoxesDB();
    private SchemaObjectDB<InsideBox> insideBoxesDB = DBSimulator.getInsideBoxesDB();
    private SchemaObjectDB<BuildingArea> buildingAreasDB = DBSimulator.getAreasDB();
    private SchemaObjectDB<Network> networksDB = DBSimulator.getNetworksDB();
    private SchemaObjectDB<ConnectedLine> connectedLinesDB = DBSimulator.getConnectedLinesDB();
    private SchemaObjectDB<StepPoint> stepPointsDB = DBSimulator.getStepPointsDB();
    private SchemaObjectDB<Walker> walkersDB = DBSimulator.getWalkersDB();

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home() {
        return "home";
    }

    @RequestMapping(value = "/enter-edit-schema/{id}", method = RequestMethod.GET)
    public ModelAndView enterSchemaEditor(@PathVariable Integer id) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("schemaId", id);
        modelAndView.setViewName("editor");
        return modelAndView;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/getSchema/{id}", method = RequestMethod.GET)
    public Schema getSchema(@PathVariable Integer id) throws Exception {
        if (id == null || id < 1 || id > 2) {
            throw new Exception(String.format("No schema with such id '%d'", id));
        }
        if (id == 1) {
            return DBSimulator.createSchema1();
        }
        throw new Exception("Schema 2 in TODO state");
    }

    @RequestMapping(value = "/getBox/{id}", method = RequestMethod.GET)
    public Box getBoxById(@PathVariable Integer id) {
        return boxesDB.getEntityById(id);
    }

    @RequestMapping(value = "/getBoxes/{id}", method = RequestMethod.GET)
    public List<Box> getBoxesBySchemaId(@PathVariable Integer id) {
        return boxesDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveBox/{id}", method = RequestMethod.POST)
    public void saveBox(@PathVariable Integer id, Box box) {
        box.setSchemaId(id);
        boxesDB.updateOrSaveEntity(box);
    }

    @RequestMapping(value = "/getInsideBox/{id}", method = RequestMethod.GET)
    public InsideBox getInsideBoxById(@PathVariable Integer id) {
        return insideBoxesDB.getEntityById(id);
    }

    @RequestMapping(value = "/getInsideBoxes/{id}", method = RequestMethod.GET)
    public List<InsideBox> getInsideBoxesBySchemaId(@PathVariable Integer id) {
        return insideBoxesDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveInsideBox/{id}", method = RequestMethod.POST)
    public void saveInsideBox(@PathVariable Integer id, InsideBox box) {
        box.setSchemaId(id);
        insideBoxesDB.updateOrSaveEntity(box);
    }

    @RequestMapping(value = "/getBuildingArea/{id}", method = RequestMethod.GET)
    public BuildingArea getBuildingAreaById(@PathVariable Integer id) {
        return buildingAreasDB.getEntityById(id);
    }

    @RequestMapping(value = "/getBuildingAreas/{id}", method = RequestMethod.GET)
    public List<BuildingArea> getBuildingAreasBySchemaId(@PathVariable Integer id) {
        return buildingAreasDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveBuildingArea/{id}", method = RequestMethod.POST)
    public void saveBuildingArea(@PathVariable Integer id, BuildingArea area) {
        area.setSchemaId(id);
        buildingAreasDB.updateOrSaveEntity(area);
    }

    @RequestMapping(value = "/getNetwork/{id}", method = RequestMethod.GET)
    public Network getNetworkById(@PathVariable Integer id) {
        return networksDB.getEntityById(id);
    }

    @RequestMapping(value = "/getNetworks/{id}", method = RequestMethod.GET)
    public List<Network> getNetworkBySchemaId(@PathVariable Integer id) {
        return networksDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveNetwork/{id}", method = RequestMethod.POST)
    public void saveNetwork(@PathVariable Integer id, Network net) {
        net.setSchemaId(id);
        networksDB.updateOrSaveEntity(net);
    }

    @RequestMapping(value = "/getConnectedLine/{id}", method = RequestMethod.GET)
    public ConnectedLine getConnectedLinesById(@PathVariable Integer id) {
        return connectedLinesDB.getEntityById(id);
    }

    @RequestMapping(value = "/getConnectedLines/{id}", method = RequestMethod.GET)
    public List<ConnectedLine> getConnectedLinesBySchemaId(@PathVariable Integer id) {
        return connectedLinesDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveConnectedLine/{id}", method = RequestMethod.POST)
    public void saveConnectedLine(@PathVariable Integer id, ConnectedLine line) {
        line.setSchemaId(id);
        connectedLinesDB.updateOrSaveEntity(line);
    }

    @RequestMapping(value = "/getStepPoint/{id}", method = RequestMethod.GET)
    public StepPoint getStepPointById(@PathVariable Integer id) {
        return stepPointsDB.getEntityById(id);
    }

    @RequestMapping(value = "/getStepPoints/{id}", method = RequestMethod.GET)
    public List<StepPoint> getStepPointsBySchemaId(@PathVariable Integer id) {
        return stepPointsDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveStepPoint/{id}", method = RequestMethod.POST)
    public void saveStepPoint(@PathVariable Integer id, StepPoint point) {
        point.setSchemaId(id);
        stepPointsDB.updateOrSaveEntity(point);
    }

    @RequestMapping(value = "/getWalker/{id}", method = RequestMethod.GET)
    public Walker getWalkerById(@PathVariable Integer id) {
        return walkersDB.getEntityById(id);
    }

    @RequestMapping(value = "/getWalkers/{id}", method = RequestMethod.GET)
    public List<Walker> getWalkersBySchemaId(@PathVariable Integer id) {
        return walkersDB.getAllEntitiesBySchemaId(id);
    }

    @RequestMapping(value = "/saveWalker/{id}", method = RequestMethod.POST)
    public void saveWalker(@PathVariable Integer id, Walker walker) {
        walker.setSchemaId(id);
        walkersDB.updateOrSaveEntity(walker);
    }
}
