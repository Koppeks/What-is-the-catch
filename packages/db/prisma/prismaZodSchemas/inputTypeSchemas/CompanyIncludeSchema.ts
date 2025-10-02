import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceFindManyArgsSchema } from "../outputTypeSchemas/ServiceFindManyArgsSchema"
import { CompanyAliasFindManyArgsSchema } from "../outputTypeSchemas/CompanyAliasFindManyArgsSchema"
import { DomainFindManyArgsSchema } from "../outputTypeSchemas/DomainFindManyArgsSchema"
import { CompanyCountOutputTypeArgsSchema } from "../outputTypeSchemas/CompanyCountOutputTypeArgsSchema"

export const CompanyIncludeSchema: z.ZodType<Prisma.CompanyInclude> = z.object({
  Service: z.union([z.boolean(),z.lazy(() => ServiceFindManyArgsSchema)]).optional(),
  CompanyAlias: z.union([z.boolean(),z.lazy(() => CompanyAliasFindManyArgsSchema)]).optional(),
  Domain: z.union([z.boolean(),z.lazy(() => DomainFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default CompanyIncludeSchema;
