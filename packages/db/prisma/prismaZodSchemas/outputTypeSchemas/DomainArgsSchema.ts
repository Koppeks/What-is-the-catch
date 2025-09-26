import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainSelectSchema } from '../inputTypeSchemas/DomainSelectSchema';
import { DomainIncludeSchema } from '../inputTypeSchemas/DomainIncludeSchema';

export const DomainArgsSchema: z.ZodType<Prisma.DomainDefaultArgs> = z.object({
  select: z.lazy(() => DomainSelectSchema).optional(),
  include: z.lazy(() => DomainIncludeSchema).optional(),
}).strict();

export default DomainArgsSchema;
