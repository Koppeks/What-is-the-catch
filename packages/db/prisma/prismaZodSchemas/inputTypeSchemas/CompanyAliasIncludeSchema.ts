import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"

export const CompanyAliasIncludeSchema: z.ZodType<Prisma.CompanyAliasInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict();

export default CompanyAliasIncludeSchema;
