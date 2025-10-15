import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateManyHeadingBlockInputSchema } from './SectionCreateManyHeadingBlockInputSchema';

export const SectionCreateManyHeadingBlockInputEnvelopeSchema: z.ZodType<Prisma.SectionCreateManyHeadingBlockInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => SectionCreateManyHeadingBlockInputSchema), z.lazy(() => SectionCreateManyHeadingBlockInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default SectionCreateManyHeadingBlockInputEnvelopeSchema;
