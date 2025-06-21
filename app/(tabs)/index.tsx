import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.toLocaleString('default', {month: 'long'});
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

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleHeader}>
            <View>
                <Text style={{fontWeight: "bold", fontSize: 18}}>Finance Overview</Text>
                <Text>{day} {month} {year}</Text>
            </View>
            <View style={styles.userIconBackground}>
                <Ionicons name="person" color={"white"} size={20}/>
            </View>
        </View>
      
        <View style={styles.bigCard}>
            <View style={styles.cardFigures}>
                <Text style={{color: "white", fontWeight: "500"}}>Total Balance</Text>
                <Text style={{fontSize: 30, color: "white", fontWeight: "bold"}}>UGX {formattedBalance}</Text>
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
                <Pressable style={styles.rowBtn}>
                    <Ionicons name="add-circle-outline" size={42} color={"#a78bfa"} style={{fontWeight: "bold"}}/>

                    <Text>
                        Add Transaction
                    </Text>
                </Pressable>

                <Pressable style={styles.rowBtn}>
                    <Ionicons name="card-outline" size={42} color={"#a78bfa"} style={{fontWeight: "bold"}}/>

                    <Text>
                        View Expenses
                    </Text>
                </Pressable>
            </View>

            <View style={styles.secondRow}>
                <Pressable style={styles.rowBtn}>
                    <Ionicons name="trophy" size={42} color={"#a78bfa"} style={{fontWeight: "bold"}}/>

                    <Text>
                        Savings Goals
                    </Text>
                </Pressable>

                <Pressable style={styles.rowBtn}>
                    <Ionicons name="analytics" size={42} color={"#a78bfa"} style={{fontWeight: "bold"}}/>

                    <Text>
                        Report
                    </Text>
                </Pressable>
            </View>
        </View>

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