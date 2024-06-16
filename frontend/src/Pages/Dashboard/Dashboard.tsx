import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../../contexts/ApiContext";
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

        const mainData = await api.getUserMainData(id);
        if (mainData) setUserMain(mainData);

        const activityData = await api.getUserActivity(id);
        if (activityData) setUserActivity(activityData);

        const averageSessionsData = await api.getUserAverageSessions(id);
        if (averageSessionsData) setUserAverageSessions(averageSessionsData);

        const performanceData = await api.getUserPerformance(id);
        if (performanceData) {
          const kind: { [key: number]: string } = {};
          for (const [key, value] of Object.entries(performanceData.kind)) {
            kind[parseInt(key)] = value as string;
          }

          setUserPerformance({
            userId: parseInt(id, 10),
            data: performanceData.data,
            kind,
          });
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

  return (
    <>
      <NavVertical />
      <PageProfil>
        <Bonjour>
          <h1>Bonjour {userMain.userInfos.firstName}</h1>
          <p>Félicitations! Vous avez atteint vos objectifs hier 👏</p>
        </Bonjour>
        <Graphiques>
          <HorizonGauche>
            <Activity>
              <ActivityBarChart userActivity={userActivity} />
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
                <ActivityRadialBarChart score={userMain.todayScore} />
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
