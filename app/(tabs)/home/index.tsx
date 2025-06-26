import AiInsightsCard, { AiInsightsCardProps } from "@/components/Ai_insightsCards";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.toLocaleString('default', { month: 'long' });
const day = currentDate.getDate();

export default function Home() {
  const [balance, setBalance] = useState(500000);
  const [income, setIncome] = useState(320000);
  const [bonuses, setBonuses] = useState(45000);
  const [others, setOthers] = useState(135000);

  const formattedBalance = balance.toLocaleString();
  const formattedIncome = income.toLocaleString();
  const formattedBonuses = bonuses.toLocaleString();
  const formattedOthers = others.toLocaleString();

  const transactions = () => {
    router.navigate('/(tabs)/home/transactions');
  };

  const detailedAiInsightsData: AiInsightsCardProps[] = [
    {
      id: '1',
      title: 'Smart Spending Analysis',
      description: 'Your spending efficiency improved by 12% this month. You\'re making smarter choices with discretionary expenses.',
      category: 'spending_analysis',
      priority: 'medium',
      actionable: true,
      potentialSavings: 85,
      timeframe: 'monthly',
      icon: '📊'
    },
    {
      id: '2',
      title: 'Automated Savings Opportunity',
      description: 'Set up automatic transfers on paydays. Based on your income pattern, you can safely save an additional $200/month.',
      category: 'savings_optimization',
      priority: 'high',
      actionable: true,
      potentialSavings: 200,
      timeframe: 'monthly',
      icon: '🤖'
    },
    {
      id: '3',
      title: 'Investment Readiness Check',
      description: 'Your emergency fund is solid! You\'re ready to start investing 10% of your monthly surplus in index funds.',
      category: 'investment_advice',
      priority: 'high',
      actionable: true,
      potentialSavings: 0,
      timeframe: 'long_term',
      icon: '📈'
    },
    {
      id: '4',
      title: 'Bill Due Date Optimization',
      description: 'Aligning bill due dates with your payday (15th) could improve cash flow and reduce overdraft risk by 90%.',
      category: 'cash_flow',
      priority: 'medium',
      actionable: true,
      potentialSavings: 35,
      timeframe: 'monthly',
      icon: '📅'
    },
    {
      id: '5',
      title: 'Seasonal Spending Alert',
      description: 'Holiday spending season ahead! Start saving $150/month now to avoid January credit card debt.',
      category: 'planning',
      priority: 'medium',
      actionable: true,
      potentialSavings: 0,
      timeframe: 'seasonal',
      icon: '🎄'
    },
    {
      id: '6',
      title: 'Debt Payoff Strategy',
      description: 'Pay an extra $50 toward your credit card with 18% APR. You\'ll save $312 in interest and pay it off 8 months sooner.',
      category: 'debt_management',
      priority: 'high',
      actionable: true,
      potentialSavings: 312,
      timeframe: 'long_term',
      icon: '💳'
    }

  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.titleHeader}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Finance Overview</Text>
            <Text>{day} {month} {year}</Text>
          </View>
          <View style={styles.userIconBackground}>
            <Ionicons name="person" color={"white"} size={20} />
          </View>
        </View>

        <View style={styles.bigCard}>
          <View style={styles.cardFigures}>
            <Text style={{ color: "white", fontWeight: "500" }}>Total Balance</Text>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>UGX {formattedBalance}</Text>
          </View>

          <View style={styles.smallCardArea}>
            <View style={styles.smallCard}>
              <View style={styles.smallCardIcon}>
                <Ionicons name="wallet" size={20} color="#a78bfa" />
              </View>
              <Text style={styles.smallCardLabel}>Income</Text>
              <Text allowFontScaling={false} style={styles.smallCardAmount}>UGX {formattedIncome}</Text>
            </View>

            <View style={styles.smallCard}>
              <View style={styles.smallCardIcon}>
                <Ionicons name="gift" size={20} color="#a78bfa" />
              </View>
              <Text style={styles.smallCardLabel}>Bonuses</Text>
              <Text allowFontScaling={false} style={styles.smallCardAmount}>UGX {formattedBonuses}</Text>
            </View>

            <View style={styles.smallCard}>
              <View style={styles.smallCardIcon}>
                <Ionicons name="cash" size={20} color="#a78bfa" />
              </View>
              <Text style={styles.smallCardLabel}>Others</Text>
              <Text allowFontScaling={false} style={styles.smallCardAmount}>UGX {formattedOthers}</Text>
            </View>
          </View>
        </View>

        <View style={styles.rowsArea}>
          <View style={styles.firstRow}>
            <Pressable style={styles.rowBtn} onPress={transactions}>
              <Ionicons name="add-circle-outline" size={42} color={"#a78bfa"} style={{ fontWeight: "bold" }} />

              <Text>
                Add Transaction
              </Text>
            </Pressable>

            <Pressable style={styles.rowBtn}>
              <Ionicons name="card-outline" size={42} color={"#a78bfa"} style={{ fontWeight: "bold" }} />

              <Text>
                View Expenses
              </Text>
            </Pressable>
          </View>

          <View style={styles.secondRow}>
            <Pressable style={styles.rowBtn}>
              <Ionicons name="trophy" size={42} color={"#a78bfa"} style={{ fontWeight: "bold" }} />

              <Text>
                Savings Goals
              </Text>
            </Pressable>

            <Pressable style={styles.rowBtn}>
              <Ionicons name="analytics" size={42} color={"#a78bfa"} style={{ fontWeight: "bold" }} />

              <Text>
                Report
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          {detailedAiInsightsData.map((item) => (
            <AiInsightsCard key={item.id} title={item.title} description={item.description} category={item.category} priority={item.priority} actionable={item.actionable} potentialSavings={item.potentialSavings} timeframe={item.timeframe} icon={item.icon} />
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  userIconBackground: {
    width: 40,
    height: 40,
    backgroundColor: "#a78bfa",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  bigCard: {
    width: "95%",
    height: 210,
    borderRadius: 20,
    backgroundColor: "#a78bfa",
    alignSelf: "center",
    marginTop: 20,
    paddingBottom: 15
  },
  cardFigures: {
    marginTop: 20,
    marginLeft: 20
  },
  smallCardArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    marginTop: 20,
    flex: 1
  },
  smallCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 4,
    minHeight: 90
  },
  smallCardIcon: {
    marginBottom: 8
  },
  smallCardLabel: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
    marginBottom: 4
  },
  smallCardAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  rowsArea: {
    width: "95%",
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 5
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowBtn: {
    height: 100,
    width: "48%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginTop: 5
  }
});
