import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  createUser,
  deleteUser,
  getAllUsers,
  signIn,
  updateUser,
  type Candidate,
} from "../../../services/supebase";

export default function UserCrud() {
  const [users, setUsers] = useState<Candidate[]>([]);
  const [formData, setFormData] = useState<Candidate | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingModal, setIsEditingModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...(prev ?? {
        id: Date.now(), // or something unique
        name: "",
        email: "",
        phone: null,
        role: [],
        created_at: new Date(),
      }),
      [name]: value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({
      ...(prev ?? {
        id: Date.now(),
        name: "",
        email: "",
        phone: null,
        role: [],
        created_at: new Date(),
      }),
      role: [value],
    }));
  };

  const handleSubmit = async () => {
    // signUp()
    signIn();
    if (isEditing) {
      if (formData) {
        const { data, error } = await updateUser(formData, formData?.id);
        if (error) {
          alert(error?.message);
          return;
        }
        if (data) {
          setUsers((prev) =>
            prev.map((item) =>
              item.id === formData?.id ? Object.assign({}, item, data) : item,
            ),
          );
        }
      }
    } else {
      if (formData) {
        const apiResponse = await createUser({
          name: formData?.name,
          email: formData?.email,
          role: formData?.role,
          phone: Number(formData?.phone),
          id: Number(new Date().getSeconds().toString()) + 10,
          created_at: new Date(),
        });
        if (apiResponse) {
          setUsers((prev) => [...prev, ...apiResponse]);
        }
      }
    }
    setFormData(null);
    setIsEditing(false);
    setIsEditingModal(false);
  };

  const handleEdit = (user: Candidate) => {
    setFormData(user);
    setIsEditing(true);
    setIsEditingModal(true);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  const getUsers = async () => {
    const { data } = await getAllUsers();
    if (data) {
      setUsers(data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-6 grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Dialog open={isEditingModal} onOpenChange={setIsEditingModal}>
            <DialogTrigger asChild>
              <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {isEditing ? "Edit User" : "Add User"}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    name="name"
                    value={
                      formData && formData?.name !== null ? formData.name : ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={
                      formData && formData?.email !== null ? formData.email : ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    name="phone"
                    value={
                      formData && formData?.phone !== null ? formData.phone : ""
                    }
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Role</Label>
                  <Select
                    value={
                      formData && formData?.role !== null
                        ? formData.role[0]
                        : ""
                    }
                    onValueChange={handleRoleChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleSubmit}>
                  {isEditing ? "Update" : "Create"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Table */}
          <Table className="mt-6">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(users) &&
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
