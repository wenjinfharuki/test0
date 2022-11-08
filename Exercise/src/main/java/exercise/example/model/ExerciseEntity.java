package exercise.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "admin")
public class ExerciseEntity {

	@Id
	@Column(name = "admin_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long adminId;

	@NonNull
	@Column(name = "admin_name")
	private String adminName;

	@NonNull
	@Column(name = "admin_email")
	private String adminEmail;

	@NonNull
	@Column(name = "password")
	private String password;

	public ExerciseEntity() {

	}

	public ExerciseEntity(Long adminId, String adminName, String adminEmail, String password) {
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.password = password;
	}

	public ExerciseEntity(String adminName, String adminEmail, String password) {
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.password = password;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "ExerciseEntity [adminId=" + adminId + ", adminName=" + adminName + ", adminEmail=" + adminEmail
				+ ", password=" + password + "]";
	}
}
