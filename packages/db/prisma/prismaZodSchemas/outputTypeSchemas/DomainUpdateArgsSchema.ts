import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainIncludeSchema } from '../inputTypeSchemas/DomainIncludeSchema'
import { DomainUpdateInputSchema } from '../inputTypeSchemas/DomainUpdateInputSchema'
import { DomainUncheckedUpdateInputSchema } from '../inputTypeSchemas/DomainUncheckedUpdateInputSchema'
import { DomainWhereUniqueInputSchema } from '../inputTypeSchemas/DomainWhereUniqueInputSchema'
import { CompanyArgsSchema } from "../outputTypeSchemas/CompanyArgsSchema"
import { ServiceDomainFindManyArgsSchema } from "../outputTypeSchemas/ServiceDomainFindManyArgsSchema"
import { DomainCountOutputTypeArgsSchema } from "../outputTypeSchemas/DomainCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DomainSelectSchema: z.ZodType<Prisma.DomainSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  host: z.boolean().optional(),
  note: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  ServiceDomain: z.union([z.boolean(),z.lazy(() => ServiceDomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DomainUpdateArgsSchema: z.ZodType<Prisma.DomainUpdateArgs> = z.object({
  select: DomainSelectSchema.optional(),
  include: z.lazy(() => DomainIncludeSchema).optional(),
  data: z.union([ DomainUpdateInputSchema,DomainUncheckedUpdateInputSchema ]),
  where: DomainWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DomainUpdateArgs>;

export default DomainUpdateArgsSchema;
