import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"

export const CompanyAliasSelectSchema: z.ZodType<Prisma.CompanyAliasSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  kind: z.boolean().optional(),
  value: z.boolean().optional(),
  valueNorm: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export default CompanyAliasSelectSchema;
