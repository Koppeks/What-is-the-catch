import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainCountOutputTypeSelectSchema } from './DomainCountOutputTypeSelectSchema';

export const DomainCountOutputTypeArgsSchema: z.ZodType<Prisma.DomainCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DomainCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DomainCountOutputTypeSelectSchema;
