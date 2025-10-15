import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SectionCountOutputTypeSelectSchema } from './SectionCountOutputTypeSelectSchema';

export const SectionCountOutputTypeArgsSchema: z.ZodType<Prisma.SectionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SectionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SectionCountOutputTypeSelectSchema;
