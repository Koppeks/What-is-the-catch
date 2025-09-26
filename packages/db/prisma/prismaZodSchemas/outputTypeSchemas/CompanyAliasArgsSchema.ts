import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyAliasSelectSchema } from '../inputTypeSchemas/CompanyAliasSelectSchema';
import { CompanyAliasIncludeSchema } from '../inputTypeSchemas/CompanyAliasIncludeSchema';

export const CompanyAliasArgsSchema: z.ZodType<Prisma.CompanyAliasDefaultArgs> = z.object({
  select: z.lazy(() => CompanyAliasSelectSchema).optional(),
  include: z.lazy(() => CompanyAliasIncludeSchema).optional(),
}).strict();

export default CompanyAliasArgsSchema;
