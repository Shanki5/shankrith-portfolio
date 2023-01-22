import { IProjectProps } from "./project"

export const projectsData: IProjectProps[] = [{
    name: "Biometric Cloud Voting System",
    description: "Constructed a biometric voting system which uses fingerprint for secure voting and integration with cloud for real time result",
    techStack: ["Python", "Firebase", "PyQt"],
    imageUrl: new URL("https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"),
    githubUrl: new URL("https://github.com/Shanki5/fingerprint_sensor"),
    orientation: false

}, {
    name: "Autonomous UAV",
    description: "Successfully simulated drones to navigate in uncertain environments using deep reinforcement learning algorithms with visual inputs alone, resulting in a 90\% success rate of navigation.",
    techStack: ["ROS", "Python", "OpenAI Gym"],
    imageUrl: new URL("https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"),
    githubUrl: new URL("https://github.com"),
    orientation: true

}, {
    name: "Assistive Robotic Manipulator",
    description: "Implemented a deep reinforcement learning approach for grasping objects using a robotic arm,resulting in a 80% reduction in time spent on programming specific grasping poses for new objects. Developed a manipulation stack that enabled the KUKA robotic arm to pick objects of varying sizes and shapes.",
    techStack: ["ROS", "C++", "Gazebo"],
    imageUrl: new URL("https://images.unsplash.com/photo-1647427060118-4911c9821b82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"),
    githubUrl: new URL("https://github.com"),
    orientation: false

}]