import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../../contexts/useApi";
import ActivityBarChart from "../../Componants/recharts/activity/BarChart";
import ActivityRadarChart from "../../Componants/recharts/radars/RadarChart";
import ActivityRadialBarChart from "../../Componants/recharts/score/RadialBarChart";
import ActivitySession from "../../Componants/recharts/session/Session";
import NavVertical from "../../Componants/nav/vertical/NavVertical";
import caloriesIcon from "../../assets/images/calories-icon.png";
import proteinIcon from "../../assets/images/protein-icon.png";
import carbsIcon from "../../assets/images/carbs-icon.png";
import fatIcon from "../../assets/images/fat-icon.png";
import { UserActivity } from "../../Models/user/UserActivity";
import { UserAverageSessions } from "../../Models/user/UserAverageSessions";
import { AverageSession } from "../../Models/activity/AverageSession";
import { UserMainData } from "../../Models/user/UserMainData";
import { UserPerformance } from "../../Models/performances/UserPerformance";

import {
  PageProfil,
  Bonjour,
  Graphiques,
  HorizonGauche,
  Activity,
  Carre,
  Sessions,
  Performance as PerformanceSection,
  Score,
  IconDroite,
  InfoContainer,
  Infos,
} from "./Dashboard.style";

const Dashboard: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const api = useApi();

  const [userMain, setUserMain] = useState<UserMainData | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null);
  const [userAverageSessions, setUserAverageSessions] =
    useState<UserAverageSessions | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;

        const mainDataResponse = await api.getUserMainData(id);
        const mainData = mainDataResponse?.data;
        if (!mainData) throw new Error("User not found");
        console.log("Main Data:", mainData);
        setUserMain(mainData);

        const activityDataResponse = await api.getUserActivity(id);
        const activityData = activityDataResponse?.data;
        if (!activityData) throw new Error("User activity not found");
        console.log("Activity Data:", activityData);
        setUserActivity(activityData);

        const averageSessionsDataResponse = await api.getUserAverageSessions(
          id
        );
        const averageSessionsData = averageSessionsDataResponse?.data;
        if (!averageSessionsData)
          throw new Error("User average sessions not found");
        console.log("Average Sessions Data:", averageSessionsData);
        setUserAverageSessions(averageSessionsData);

        const performanceDataResponse = await api.getUserPerformance(id);
        const performanceData = performanceDataResponse?.data;
        console.log("Performance Data:", performanceData);
        if (performanceData && performanceData.kind) {
          const kind: { [key: number]: string } = {};
          for (const [key, value] of Object.entries(performanceData.kind)) {
            kind[parseInt(key)] = value as string;
          }
          setUserPerformance({
            userId: parseInt(id, 10),
            data: performanceData.data,
            kind,
          });
        } else {
          throw new Error("User performance data not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/error");
      }
    };

    fetchData();
  }, [id, api, navigate]);

  if (
    !id ||
    !userMain ||
    !userActivity ||
    !userAverageSessions ||
    !userPerformance
  ) {
    return <div>Loading...</div>;
  }

  const sessions = userAverageSessions.sessions.map(
    (session: AverageSession) => ({
      day: parseInt(session.day, 10),
      sessionLength: session.sessionLength,
    })
  );

  // Gestion des incohérences pour todayScore
  const todayScore = userMain.todayScore ?? userMain.score ?? 0;

  return (
    <>
      <NavVertical />
      <PageProfil>
        <Bonjour>
          <h1>
            Bonjour{" "}
            <span style={{ color: "red" }}>{userMain.userInfos.firstName}</span>
          </h1>
          <p>Félicitations! Vous avez atteint vos objectifs hier 👏</p>
        </Bonjour>
        <Graphiques>
          <HorizonGauche>
            <Activity>
              <ActivityBarChart
                userActivity={{
                  ...userActivity,
                  userId: userActivity.userId.toString(),
                }}
              />
            </Activity>
            <Carre>
              <Sessions>
                <ActivitySession userSessions={sessions} />
              </Sessions>
              <PerformanceSection>
                <ActivityRadarChart
                  data={userPerformance.data}
                  kind={userPerformance.kind}
                />
              </PerformanceSection>
              <Score>
                <ActivityRadialBarChart score={todayScore} />
              </Score>
            </Carre>
          </HorizonGauche>
          <IconDroite>
            <InfoContainer>
              <img src={caloriesIcon} alt="Calories icon" />
              <Infos>
                <h3>{userMain.keyData.calorieCount} kCal</h3>
                <p>Calories</p>
              </Infos>
            </InfoContainer>
            <InfoContainer>
              <img src={proteinIcon} alt="Protein icon" />
              <Infos>
                <h3>{userMain.keyData.proteinCount} g</h3>
                <p>Proteines</p>
              </Infos>
            </InfoContainer>
            <InfoContainer>
              <img src={carbsIcon} alt="Carbs icon" />
              <Infos>
                <h3>{userMain.keyData.carbohydrateCount} g</h3>
                <p>Glucides</p>
              </Infos>
            </InfoContainer>
            <InfoContainer>
              <img src={fatIcon} alt="Fat icon" />
              <Infos>
                <h3>{userMain.keyData.lipidCount} g</h3>
                <p>Lipides</p>
              </Infos>
            </InfoContainer>
          </IconDroite>
        </Graphiques>
      </PageProfil>
    </>
  );
};

export default Dashboard;
